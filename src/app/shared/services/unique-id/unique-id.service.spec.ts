import { UniqueIdService } from './unique-id.service';

const service = new UniqueIdService();
describe(UniqueIdService.name, () => {
  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}
    should generate id when called with prefix`, () => {
    const service = new UniqueIdService();
    const id = service.generateUniqueIdWithPrefix('app');

    expect(id.startsWith('app-')).toBeTrue();
  });

  it(`#${UniqueIdService.prototype.getNumberOfGeneratedUniqueIds.name}
    should not generate duplicated ids when called`, () => {
    const service = new UniqueIdService();
    const ids = new Set();
    for (let x = 0; x < 50; x++) {
      ids.add(service.generateUniqueIdWithPrefix('app'));
    }

    expect(ids.size).toBe(50);
  });

  it(`#${UniqueIdService.prototype.getNumberOfGeneratedUniqueIds.name}
    should return the number of generatedIds  when called`, () => {
    const service = new UniqueIdService();
    service.generateUniqueIdWithPrefix('app');
    service.generateUniqueIdWithPrefix('app');
    expect(service.getNumberOfGeneratedUniqueIds()).toBe(2);
  });
});
