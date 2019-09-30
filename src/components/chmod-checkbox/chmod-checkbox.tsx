import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "chmod-checkbox",
  styleUrl: "chmod-checkbox.scss",
  shadow: true
})
export class CHModCheckbox {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  // private getText(): string {
  //   return format(this.first, this.middle, this.last);
  // }

  render() {
    return (
      <div class="wrapper">
        <div class="column1 animated-checkbox">
          <form>
            <div class="flex-center-vertically">
              <input name="check" type="checkbox" id="read" />
              <label htmlFor="read">
                <span></span>
              </label>
              <span class="content-text-style">READ</span>
            </div>
          </form>
        </div>
        <div class="column2 animated-checkbox">
          <form>
            <div class="flex-center-vertically">
              <input name="check" type="checkbox" id="write" />
              <label htmlFor="write">
                <span></span>
              </label>
              <span class="content-text-style">WRITE</span>
            </div>
          </form>
        </div>
        <div class="column3 animated-checkbox">
          <form>
            <div class="flex-center-vertically">
              <input name="check" type="checkbox" id="execute" />
              <label htmlFor="execute">
                <span></span>
              </label>
              <span class="content-text-style">EXECUTE</span>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
