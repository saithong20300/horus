import { Component, OnInit, ViewEncapsulation, AfterViewInit ,  } from '@angular/core';
import { Helpers } from '../../helpers';
import { ScriptLoaderService } from '../../utils/_services/script-loader.service';
import { VariableAst } from '@angular/compiler';
import { NgOption} from '@ng-select/ng-select';
import { setTheme } from 'ngx-bootstrap/utils';

@Component({
    selector: "app-index",
    templateUrl: "./dashboard.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class DashboardComponent implements OnInit, AfterViewInit {
    datepickerModel: Date;
 
    constructor(private _script: ScriptLoaderService ) {
        setTheme('bs4');
    }
    data: Array<NgOption> = [
        {value: '0', label: 'Aech'},
        {value: '1', label: 'Art3mis', disabled: true},
        {value: '2', label: 'Daito'},
        {value: '3', label: 'Parzival'},
        {value: '4', label: 'Shoto'}
    ];
    ngOnInit() {

       /* $("#selectData").change(function(){
                alert("data is : " + $('#selectData').val());
        });

        $('#checkbox1').click(function(){
            alert("checkbox1 click  : " + $("#checkbox1").val());
        });

        $('#checkbox2').click(function(){
            alert("checkbox1 click  : " + $("#checkbox2").val());
        });

        $("input[name$='radioOptions']").click(function(){
            alert("radio value : " + $("input[name$='radioOptions']:checked").val());
        });
        $('#date').click(function(){
            alert("checkbox1 click  : " + $("#date").val());
        }); */
        
    }
    
    ngAfterViewInit() {
        this._script.loadScripts('app-index',
        ['assets/app/js/dashboard.js']);
       // Helpers.bodyClass('m-page--wide m-header--fixed m-header--fixed-mobile m-footer--push m-aside--offcanvas-default');
    }
 
}