import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  imports: [CommonModule],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css',
})
export class NavBar implements OnInit {
  mobileMenuOpen = signal(false);
  
  ngOnInit(): void {
    window.addEventListener('scroll', this.scroll, true)
  }

  toggleMobileMenu() {
    this.mobileMenuOpen.set(!this.mobileMenuOpen());
  }

  closeMobileMenu() {
    this.mobileMenuOpen.set(false);
  }
  
  public scrollToTop () {
    var element = <HTMLInputElement> document.getElementById("home");
    element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  public scrollToAbout () {
    var element = <HTMLInputElement> document.getElementById("about");
    element.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
  }

  public scrollToSkills () {
    var element = <HTMLInputElement> document.getElementById("skills");
    element.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
  }

  public scrollToExperiences () {
    var element = <HTMLInputElement> document.getElementById("experiences");
    element.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
  }

  scroll = (): void => {
    // console.log(window.scrollY);
    if(window.scrollY === 0){
      document.body.style.setProperty('--navbar-color', "#100e17");
    }else if(window.scrollY > 0){
      document.body.style.setProperty('--navbar-color', "#202026");
    }

    if(window.scrollY >= 0 && window.scrollY <= 389) {
      var element = <HTMLInputElement> document.getElementById("home1");
      if(!element.checked) {
        element.checked = true;
      }
    }

    if(window.scrollY >= 390 && window.scrollY <= 659) {
      var element = <HTMLInputElement> document.getElementById("about1");
      if(!element.checked) {
        element.checked = true;
      }
    }
  }
  
}
