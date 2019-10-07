import { Component, Prop, h, State } from "@stencil/core";
import {
  calculatePermission,
  checkIfDecodePermission
} from "../../utils/utils";

@Component({
  tag: "chmod-checkbox",
  styleUrl: "chmod-checkbox.scss",
  shadow: true
})
export class CHModCheckbox {
  /**
   * The first button text
   */
  @Prop() first: string = "READ";

  /**
   * The middle button text
   */
  @Prop() middle: string = "WRITE";

  /**
   * The last button text
   */
  @Prop() last: string = "EXECUTE";

  /**
   * Main mutable permission value depends on the selection of checkboxes
   */
  @Prop({ mutable: true, reflect: true }) permission: number = 0;

  /**
   *
   */
  @Prop({ reflect: true }) base: string = "";

  isChecked = type => {
    return checkIfDecodePermission(this.permission, [type]);
  };

  onChange = (event, type) => {
    console.log(event);
    console.log(event.target.checked);
    const checked = event.target.checked;
    this.permission = calculatePermission(type, checked, this.permission);
  };

  render() {
    return (
      <div class="wrapper">
        <div class="column1 animated-checkbox">
          <form>
            <div class="flex-center-vertically">
              <input
                type="checkbox"
                checked={this.isChecked("read")}
                onChange={(event: UIEvent) => this.onChange(event, "read")}
              />
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
              <input
                type="checkbox"
                checked={this.isChecked("write")}
                onChange={(event: UIEvent) => this.onChange(event, "write")}
              />
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
              <input
                type="checkbox"
                checked={this.isChecked("execute")}
                onChange={(event: UIEvent) => this.onChange(event, "execute")}
              />
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
