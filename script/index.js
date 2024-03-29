const fs = require("fs");
const path = require("path");

// 定义要保留的本地目录名称
const keepDirName = "script";

// 定义源目录路径
const sourceDir = "../../pro-cli/dist";
const sourcePath = path.resolve(__dirname, sourceDir);

// 定义目标目录，即当前目录的上一级（与script同级）
const destDir = path.resolve(__dirname, "..");

// 清理目标目录下除保留目录之外的所有文件及子目录
cleanDestinationDir(destDir, keepDirName);

// 检查源目录是否存在并复制文件
if (fs.existsSync(sourcePath) && fs.lstatSync(sourcePath).isDirectory()) {
  fs.readdirSync(sourcePath, { withFileTypes: true }).forEach((entry) => {
    const targetPath = path.join(destDir, entry.name);

    if (!entry.isDirectory() || entry.name !== keepDirName) {
      if (entry.isFile()) {
        fs.copyFileSync(path.join(sourcePath, entry.name), targetPath);
      } else if (entry.isDirectory()) {
        fs.mkdirSync(targetPath, { recursive: true });
        copyRecursive(path.join(sourcePath, entry.name), targetPath);
      }
    }
  });

  console.log(
    "已完成复制所有文件到目标目录的操作，已保留本地 '" +
      keepDirName +
      "' 目录。"
  );
} else {
  console.error("源目录 " + sourcePath + " 不存在，无法进行复制操作。");
}

function copyRecursive(src, dest) {
  fs.readdirSync(src, { withFileTypes: true }).forEach((entry) => {
    const srcEntryPath = path.join(src, entry.name);
    const destEntryPath = path.join(dest, entry.name);

    if (entry.isFile()) {
      fs.copyFileSync(srcEntryPath, destEntryPath);
    } else if (entry.isDirectory() && entry.name !== keepDirName) {
      fs.mkdirSync(destEntryPath, { recursive: true });
      copyRecursive(srcEntryPath, destEntryPath);
    }
  });
}

function cleanDestinationDir(destPath, keepDirName) {
  fs.readdirSync(destPath).forEach((file) => {
    const filePath = path.join(destPath, file);

    // 添加一个新的条件，避免删除 .git 目录
    if (filePath === path.join(destPath, ".git")) return;

    if (filePath !== path.join(destPath, keepDirName)) {
      if (fs.lstatSync(filePath).isDirectory()) {
        fs.rmSync(filePath, { recursive: true });
      } else {
        fs.unlinkSync(filePath);
      }
    }
  });
}
