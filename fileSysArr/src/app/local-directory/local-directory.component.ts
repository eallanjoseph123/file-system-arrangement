import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'local-directory',
  templateUrl: './local-directory.component.html',
  styleUrls: ['./local-directory.component.scss']
})
export class LocalDirectoryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

    //TODO: Send the current directory or home directory 
   //TODO: User can manual move the files into the target destination directory
   //disable/enable (users can choose which type of document will be transfered)
   /**
    * give an options of file types like dropdown pdf,txt, doc etc..
    * or explicitly type the matching file name e.g. allan = 123allansadasd.doc asdasallan.txt
    * these 2 files will be transfered
    */

}
