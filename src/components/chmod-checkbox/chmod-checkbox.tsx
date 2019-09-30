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
  @Prop({ mutable: true }) first: string = "READ";

  /**
   * The middle name
   */
  @Prop({ mutable: true }) middle: string = "WRITE";

  /**
   * The last name
   */
  @Prop({ mutable: true }) last: string = "EXECUTE";

  @Prop() permissionValue: number = 0;
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
                checked={this.isReadChecked}
                onChange={() => {
                  this.isReadChecked = !this.isReadChecked;
                  this.permissionValue = calculatePermission(
                    "read",
                    this.isReadChecked,
                    this.permissionValue
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
                checked={this.isWriteChecked}
                onChange={() => {
                  this.isWriteChecked = !this.isWriteChecked;
                  this.permissionValue = calculatePermission(
                    "write",
                    this.isWriteChecked,
                    this.permissionValue
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
                checked={this.isExecuteChecked}
                onChange={() => {
                  this.isExecuteChecked = !this.isExecuteChecked;
                  this.permissionValue = calculatePermission(
                    "execute",
                    this.isExecuteChecked,
                    this.permissionValue
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
