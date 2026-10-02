export class Config {
  constructor() {
    this.settings = {};
  }

  set(key, value) {
    this.settings[key] = value;
  }

  setMultiple(configObj) {
    Object.assign(this.settings, configObj);
  }

  get(key) {
    return this.settings[key];
  }

  getAll() {
    return { ...this.settings };
  }
}
