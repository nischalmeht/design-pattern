class Config {
  constructor(setup) {
    // Internal configuration object
    const settings = {};

    // Methods to modify the configuration (revealed methods)
    const configurator = {
      set: (key, value) => {
        settings[key] = value;
      },
      setMultiple: (configObj) => {
        Object.assign(settings, configObj);
      },
    };

    // Call the setup function with the configurator
    setup(configurator);

    // Freeze the settings object to make it immutable
    Object.freeze(settings);

    // Expose the settings as read-only properties
    this.get = (key) => settings[key];
    this.getAll = () => ({ ...settings });
  }
}
