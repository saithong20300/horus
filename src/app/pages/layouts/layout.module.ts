import { NgModule } from '@angular/core';
import { DefaultComponent } from '../default.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { FooterComponent } from './footer/footer.component';
import { ScrollTopComponent } from './scroll-top/scroll-top.component';
import { TooltipsComponent } from './tooltips/tooltips.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HrefPreventDefaultDirective } from '../../utils/_directives/href-prevent-default.directive';
import { UnwrapTagDirective } from '../../utils/_directives/unwrap-tag.directive';
import { NumbersOnlyDirective } from '../../utils/_directives/numbersOnly.directive';

//import { QuickSidebarComponent } from '../../theme/layouts/quick-sidebar/quick-sidebar.component';

@NgModule({
    declarations: [
        DefaultComponent,
        HeaderNavComponent,
        FooterComponent,
        ScrollTopComponent,
        TooltipsComponent,
        HrefPreventDefaultDirective,
        NumbersOnlyDirective,
        UnwrapTagDirective,
       // QuickSidebarComponent,
    ],
    exports: [
        DefaultComponent,
        HeaderNavComponent,
        FooterComponent,
        ScrollTopComponent,
        TooltipsComponent,
        HrefPreventDefaultDirective,
        NumbersOnlyDirective,
       // QuickSidebarComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
    ]
})
export class LayoutModule {
}