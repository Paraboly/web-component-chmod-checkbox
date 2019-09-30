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
      <div class="animated-checkbox">
        <form>
          <div class="flex-center-vertically">
            <input name="check" type="checkbox" id="hello" />
            <label htmlFor="hello">
              <span></span>
            </label>
            <span class="content-text-style"> </span>
          </div>
        </form>
      </div>
    );
  }
}
