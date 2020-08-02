import { Component, OnInit } from '@angular/core';
import { Picture } from 'src/app/model/model';
import { ActivatedRoute, Router } from '@angular/router';
import { PicturesApiService } from 'src/app/services/api/pictures-api.service';

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.scss']
})
export class PicturesComponent implements OnInit {

  public pictures: Picture[] = [];
  public clickedPicture: Picture;
  public loading = true;
  public picturesPath = 'https://marieservanebellet.com:5001/';
  public show = false;
  public showModal = false;
  public cptLoaded = 0;

  constructor(
    private route: ActivatedRoute,
    private pictureApiService: PicturesApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.pictureApiService.getByCategory(Number(this.route.snapshot.paramMap.get('id'))).subscribe(res => {
      this.pictures = res;
      this.loading = false;
    }, err => {
      console.log(err);
    });
  }

  showImage(p: Picture) {
    this.clickedPicture = p;
  }

  backMenu() {
    this.router.navigate(['/gallerie']);
  }

  isRectangleOrVertical(grid: string) {
    return grid.includes('/');
  }

  loaded() {
    this.cptLoaded++;
    if (this.cptLoaded === this.pictures.length) {
      this.show = true;
    }
  }

  closeModal() {
    this.showModal = false;
    this.clickedPicture = null;
  }

}
