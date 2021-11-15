const process = require("process");

module.exports.Bar = class {
  loading = 0;
  max = 10;
  label = "Loading...";

  /**
   * New progressbar instance.
   * @param {number} max Max amount of loading characters.
   * @param {string} label Loading message on the right.
   */
  constructor(max, label) {
    if (max) {
      this.max = max;
    }
    if (label) {
      this.label = label;
    }
  }

  /**
   * Increment the progressbar loading value.
   * @param {number} count Number of loading characters to add.
   */
  increment(count = 1) {
    this.loading += count;
  }

  /**
   * Display the progressbar.
   * @returns {Promise}
   */
  show() {
    return new Promise((resolve, reject) => {
      var writeBarInterval = setInterval(() => {
        if (this.loading < this.max) {
          process.stdout.cursorTo(0); // Set the cursor position to the first character.
          process.stdout.write("[|] "); // Write the loading symbol.
          process.stdout.write(this.label + " "); // Write the label.
          process.stdout.write("=".repeat(this.loading) + ">"); // Write the loading bar.

          setTimeout(() => {
            process.stdout.cursorTo(0);
            process.stdout.write("[/] ");
            process.stdout.write(this.label + " "); // Write the label.
            process.stdout.write("=".repeat(this.loading) + ">"); // Write the loading bar.

            setTimeout(() => {
              process.stdout.cursorTo(0);
              process.stdout.write("[-] ");
              process.stdout.write(this.label + " "); // Write the label.
              process.stdout.write("=".repeat(this.loading) + ">"); // Write the loading bar.

              setTimeout(() => {
                process.stdout.cursorTo(0);
                process.stdout.write("[\\] ");
                process.stdout.write(this.label + " "); // Write the label.
                process.stdout.write("=".repeat(this.loading) + ">"); // Write the loading bar.
              }, 250);
            }, 250);
          }, 250);
        } else {
          process.stdout.clearLine();
          process.stdout.cursorTo(0);
          process.stdout.write("[✅] Done!\n");
          resolve("done");
          clearInterval(writeBarInterval);
        }
      }, 1000);
    });
  }
}
