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
  @Prop() first: string = "READ";

  /**
   * The middle name
   */
  @Prop() middle: string = "WRITE";

  /**
   * The last name
   */
  @Prop() last: string = "EXECUTE";

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
              <span class="content-text-style">{this.first}</span>
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
              <span class="content-text-style">{this.middle}</span>
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
              <span class="content-text-style">{this.last}</span>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
