import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-rating',
  templateUrl: './start-rating.component.html',
  styleUrls: ['./start-rating.component.scss']
})
export class StartRatingComponent implements OnInit {

  ngOnInit(): void {
    this.chooseStars();
  }
  chooseStars() {
    let stars = document.querySelectorAll('.rating-btn')
    stars.forEach((star, index) => {
      star.addEventListener('click', () => {
        stars.forEach(ele => {
          ele.classList.remove('orange', 'checked')
          for (let i = 0; i <= index; i++) {
            stars[i].classList.add('orange', 'checked')
          }
        })
      })
    })
  }

}
