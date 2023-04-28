import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaEspertaTesteComponent } from './tabela-esperta-teste.component';

describe('TabelaEspertaTesteComponent', () => {
  let component: TabelaEspertaTesteComponent;
  let fixture: ComponentFixture<TabelaEspertaTesteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaEspertaTesteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelaEspertaTesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
