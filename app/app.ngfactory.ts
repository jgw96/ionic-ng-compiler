/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
import * as import0 from '@angular/core/src/linker/debug_context';
import * as import1 from '@angular/core/src/render/api';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from './app';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/element';
import * as import7 from '@angular/core/src/linker/view_type';
import * as import8 from '@angular/core/src/change_detection/change_detection';
import * as import9 from '@angular/core/src/metadata/view';
import * as import10 from 'ionic-angular/platform/platform';
import * as import11 from '@angular/core/src/linker/component_factory';
const styles_MyApp:any[] = [];
const nodeDebugInfos_MyApp0:import0.StaticNodeDebugInfo[] = [new import0.StaticNodeDebugInfo([],null,{})];
var renderType_MyApp:import1.RenderComponentType = null;
class _View_MyApp0 extends import2.DebugAppView<import3.MyApp> {
  _el_0: any;
  private _expr_0: any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import6.AppElement) {
    super(_View_MyApp0,renderType_MyApp,import7.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import8.ChangeDetectionStrategy.CheckAlways,nodeDebugInfos_MyApp0);
  }
  createInternal(rootSelector:string):import6.AppElement {
    const parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'ion-nav',this.debug(0,0,0));
    this._expr_0 = import8.uninitialized;
    this.init([],[this._el_0],[],[]);
    return null;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.detectContentChildrenChanges(throwOnChange);
    this.debug(0,0,9);
    const currVal_0 = this.context.rootPage;
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setBindingDebugInfo(this._el_0,'ng-reflect-root',((currVal_0 == null)? null: currVal_0.toString()));
      this.renderer.setElementProperty(this._el_0,'root',currVal_0);
      this._expr_0 = currVal_0;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
}
export function viewFactory_MyApp0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import6.AppElement):import2.AppView<import3.MyApp> {
  if ((renderType_MyApp === null)) { (renderType_MyApp = viewUtils.createRenderComponentType('/Users/justinwillis/Projects/CompilerTest/app/app.ts class MyApp - inline template',0,import9.ViewEncapsulation.None,styles_MyApp)); }
  return new _View_MyApp0(viewUtils,parentInjector,declarationEl);
}
const styles_MyApp_Host:any[] = [];
const nodeDebugInfos_MyApp_Host0:import0.StaticNodeDebugInfo[] = [new import0.StaticNodeDebugInfo([import3.MyApp],import3.MyApp,{})];
var renderType_MyApp_Host:import1.RenderComponentType = null;
class _View_MyApp_Host0 extends import2.DebugAppView<any> {
  _el_0: any;
  private _appEl_0:import6.AppElement;
  _MyApp_0_4:import3.MyApp;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import6.AppElement) {
    super(_View_MyApp_Host0,renderType_MyApp_Host,import7.ViewType.HOST,viewUtils,parentInjector,declarationEl,import8.ChangeDetectionStrategy.CheckAlways,nodeDebugInfos_MyApp_Host0);
  }
  createInternal(rootSelector:string):import6.AppElement {
    this._el_0 = this.selectOrCreateHostElement('undefined',rootSelector,this.debug(0,0,0));
    this._appEl_0 = new import6.AppElement(0,null,this,this._el_0);
    var compView_0 = viewFactory_MyApp0(this.viewUtils,this.injector(0),this._appEl_0);
    this._MyApp_0_4 = new import3.MyApp(this.parentInjector.get(import10.Platform));
    this._appEl_0.initComponent(this._MyApp_0_4,[],compView_0);
    compView_0.create(this._MyApp_0_4,this.projectableNodes,null);
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.MyApp) && (0 === requestNodeIndex))) { return this._MyApp_0_4; }
    return notFoundResult;
  }
}
function viewFactory_MyApp_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import6.AppElement):import2.AppView<any> {
  if ((renderType_MyApp_Host === null)) { (renderType_MyApp_Host = viewUtils.createRenderComponentType('',0,import9.ViewEncapsulation.Emulated,styles_MyApp_Host)); }
  return new _View_MyApp_Host0(viewUtils,parentInjector,declarationEl);
}
export const MyAppNgFactory:import11.ComponentFactory<import3.MyApp> = new import11.ComponentFactory<import3.MyApp>(null,viewFactory_MyApp_Host0,import3.MyApp);