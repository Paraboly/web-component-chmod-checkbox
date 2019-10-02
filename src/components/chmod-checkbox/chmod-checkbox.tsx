import { Component, Prop, h } from "@stencil/core";
import { calculatePermission } from "../../utils/utils";

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
   * Stores the checkbox value when first one is changed
   */
  @Prop() isReadChecked: boolean = false;

  /**
   * Stores the checkbox value when middle one is changed
   */
  @Prop() isWriteChecked: boolean = false;

  /**
   * Stores the checkbox value when last one is changed
   */
  @Prop() isExecuteChecked: boolean = false;

  render() {
    return (
      <div class="wrapper">
        <div class="column1 animated-checkbox">
          <form>
            <div class="flex-center-vertically">
              <input
                id="read"
                name="check"
                type="checkbox"
                value={this.permission}
                onChange={() => {
                  this.isReadChecked = !this.isReadChecked;
                  this.permission = calculatePermission(
                    "read",
                    this.isReadChecked,
                    this.permission
                  );
                }}
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
                id="write"
                name="check"
                type="checkbox"
                value={this.permission}
                onChange={() => {
                  this.isWriteChecked = !this.isWriteChecked;
                  this.permission = calculatePermission(
                    "write",
                    this.isWriteChecked,
                    this.permission
                  );
                }}
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
                id="execute"
                name="check"
                type="checkbox"
                value={this.permission}
                onChange={() => {
                  this.isExecuteChecked = !this.isExecuteChecked;
                  this.permission = calculatePermission(
                    "execute",
                    this.isExecuteChecked,
                    this.permission
                  );
                }}
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
