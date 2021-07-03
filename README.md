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

## Testando asserções assíncronas utilizando spyOn

O teste de observables podem ser feitas utilizando os spy's do Jasmine.

```javascript
it(`#${LikeWidgetComponent.prototype.like.name}
should trigger emission when called`, (done) => {
  spyOn(component.liked, "emit");
  fixture.detectChanges();
  component.like();
  expect(component.liked.emit).toHaveBeenCalled();
});
```

O código acima é um simples exemplo do funcionamento do método spyOn().

## Adicionar multiplos navegadores a suíte de testes

```sh
npm i -D karma-nomenavegador-launcher
```

Adicione a dependência instalada ao array de plugins em karma.conf

Em package.json crie um comando separado com o objetivo de realizar os testes em diversos navegadores.

Exemplo: "test-common": "ng test --browsers Chrome,Firefox",

### Para rodar no modo headless

"test-ci": "ng test --browsers ChromeHeadless,FirefoxHeadless",

## Gerando relatório de testes consumíveis por servidores de integração contínua.

```sh
npm i -D karma-junit-reporter
```

Adicione a biblioteca ao array de plugins em karma.conf.

No script de inicialização dos testes, adicione a flag: --reports junit

Na próxima vez que os testes forem lançados, será gerado na pasta root os relatórios em xml

## Configurando o code coverage

Exemplo de script:

```sh
"test-coverage": "ng test --watch=false --sourceMap=true --codeCoverage=true --browsers ChromeHeadless",
```
