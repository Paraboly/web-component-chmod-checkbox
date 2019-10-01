import { Component, Prop, h } from "@stencil/core";
import { calculatePermission } from "../../utils/utils";

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

  @Prop({ mutable: true, reflect: true }) permission: number = 0;
  @Prop() isReadChecked: boolean = false;
  @Prop() isWriteChecked: boolean = false;
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
