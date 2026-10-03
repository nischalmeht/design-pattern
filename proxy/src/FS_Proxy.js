class FS_Proxy {
  constructor(fs_real) {
    this.fs = fs_real;
  }

  readFile(path, format, callback) {
    if (!path.match(/.txt$|.TXT$/)) {
      return callback(new Error(`Can only read .txt files`));
    }

    this.fs.readFile(path, format, (error, data) => {
      if (error) {
        console.error(error);
        return callback(error);
      }

      return callback(null, data);
    });
  }
}

module.exports = FS_Proxy;
