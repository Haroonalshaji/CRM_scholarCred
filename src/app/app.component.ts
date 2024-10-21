import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'scholar_ap';
  isSidebarOpen: boolean = false;
  isMobileView: boolean = false;

  ngOnInit() {
    this.checkScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
    event.preventDefault();
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  checkScreenSize() {
    const width = window.innerWidth;
    this.isMobileView = width < 1024;
    if (!this.isMobileView) {
      this.isSidebarOpen = true;
    } else {
      this.isSidebarOpen = false;
    }
  }

  // Method to close the sidebar
  // closeSidebar(event?: Event): void {
  //   event?.stopPropagation(); // Prevent click event from bubbling
  //   this.isSidebarOpen = false; // Close the sidebar
  // }
}
