# Hey hey hey

## Nomenclatura de arquivos

Sempre criar o arquivo teste com o mesmo nome do arquivo alvo, adicionando o prefixo 'spec'.

## Descrição do teste

Deve seguir o padrão: "método" should "ação" when "event".

## Configurando uma instância de componente com TestBed

TestBed.configureTestingModule()

### Caso esteja fazendo TDD, declare conforme necessário os imports, exports e providers do módulo

```javascript
beforeEach(async () => {
  await TestBed.configureTestingModule({
    imports: [],
    exports: [CommonModule],
    providers: [],
  }).compileComponents();
});
```

### Se o módulo já existir se faz necessário apenas fazer o import do módulo

```javascript
beforeEach(async () => {
  await TestBed.configureTestingModule({
    imports: [LikeWidgetModule],
  }).compileComponents();
});
```

## Testando Output properties utilizando o subscribe

O teste de propriedades do tipo output podem ser feitas através do método subscribe da classe.

```javascript
it(`#${LikeWidgetComponent.prototype.like.name}
  should trigger emission when called`, (done) => {
  fixture.detectChanges();
  component.liked.subscribe(() => {
    done();
  });
  component.like();
});
```

No código acima fazemos a inscrição da observable de liked, que após ser emitido, deve executar a chamada do parâmetro 'done()' para sinalizar ao jasmine que o teste foi executado com sucesso. Após alguns segundos, caso a chamada de 'done()' não seja feita, o teste falhará.
