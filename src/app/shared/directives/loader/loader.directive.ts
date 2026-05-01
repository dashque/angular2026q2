import { booleanAttribute, Directive, effect, ElementRef, inject, input, RendererFactory2 } from '@angular/core';

@Directive({
  selector: '[dashqLoader]',
})
export class LoaderDirective {
  private readonly elementRef = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly renderer2 = inject(RendererFactory2).createRenderer(null, null);
  private readonly loaderOverlay = this.renderer2.createElement('div') as unknown as HTMLElement;
  public readonly isLoading = input(false, {
    transform: booleanAttribute,
    alias: 'dashqLoader',
  });

  constructor() {
    effect(() => {
      this.createLoader();
      if (this.isLoading() && this.elementRef) {
        this.renderer2.setStyle(this.elementRef.nativeElement.firstChild, 'display', 'none');
        this.renderer2.appendChild(this.elementRef.nativeElement, this.loaderOverlay);
      } else {
        this.renderer2.removeChild(this.elementRef.nativeElement, this.loaderOverlay);
        this.renderer2.setStyle(this.elementRef?.nativeElement, 'display', 'block');
      }
    });
  }

  private createLoader() {
    const container = this.renderer2.createElement('div') as unknown as HTMLElement;
    const spinner = this.renderer2.createElement('div') as unknown as HTMLElement;

    this.renderer2.addClass(this.loaderOverlay, 'loader-overlay');
    this.renderer2.addClass(spinner, 'loader-spinner');
    this.renderer2.addClass(container, 'loader-container');

    this.renderer2.appendChild(this.loaderOverlay, container);
    this.renderer2.appendChild(container, spinner);
  }
}
