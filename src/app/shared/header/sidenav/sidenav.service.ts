import { Injectable, } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { Observable,Subject } from 'rxjs/Rx';

@Injectable()
export class SidenavService {
  public sidenav: MatSidenav;
  /**
   * Setter for sidenav.
   *
   * @param {MdSidenav} sidenav
   */
  public setSidenav(sidenav: MatSidenav) {
    this.sidenav = sidenav;
  }

  /**
   * Open this sidenav, and return a Promise that will resolve when it's fully opened (or get rejected if it didn't).
   *
   * @returns Promise<void>
   */
  public open(): Promise<void> {
    return this.sidenav.open();
  }

  /**
   * Close this sidenav, and return a Promise that will resolve when it's fully closed (or get rejected if it didn't).
   *
   * @returns Promise<void>
   */
  public close(): Promise<void> {
    return this.sidenav.close();
  }

  /**
   * Toggle this sidenav. This is equivalent to calling open() when it's already opened, or close() when it's closed.
   *
   * @param {boolean} isOpen  Whether the sidenav should be open.
   *
   * @returns {Promise<void>}
   */
  public toggle(isOpen?: boolean): Promise<void> {
    return this.sidenav.toggle(isOpen);
  }
  constructor() {
  }
}
