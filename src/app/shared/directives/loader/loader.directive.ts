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
    this.createLoader();

    effect(() => {
      const contentElement = this.elementRef.nativeElement.firstElementChild;

      if (this.isLoading()) {
        if (contentElement) {
          this.renderer2.setStyle(contentElement, 'visibility', 'hidden');
        }

        if (!this.elementRef.nativeElement.contains(this.loaderOverlay)) {
          this.renderer2.appendChild(this.elementRef.nativeElement, this.loaderOverlay);
        }
      } else {
        if (this.elementRef.nativeElement.contains(this.loaderOverlay)) {
          this.renderer2.removeChild(this.elementRef.nativeElement, this.loaderOverlay);
        }

        if (contentElement) {
          this.renderer2.setStyle(contentElement, 'visibility', 'visible');
        }
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
