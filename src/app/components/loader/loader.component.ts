import { Component } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { LoaderService } from 'src/app/core/services/loader.service';


@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent {

  // isLoading: Subject<boolean> = this._loaderservice.isLoading;

  isLoading: boolean = false

  // constructor(private _loaderservice:LoaderService) {}

}
