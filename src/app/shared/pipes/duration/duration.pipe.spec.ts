import { DurationPipe } from './duration.pipe';

describe('DurationPipe', () => {
  const pipe = new DurationPipe();

  it('должен инициализироваться', () => {
    expect(pipe).toBeTruthy();
  });

  describe('Обработка числа', () => {
    it.each([
      [0, ''],
      [45, '45min'],
      [60, '1h'],
      [123, '2h 3min'],
    ])('должен возвращать для  %p результат  %p ', (minutes, expectedResult) => {
      const result = pipe.transform(minutes);

      expect(expectedResult).toBe(result);
    });
  });

  describe('Обработка недопустимых значений', () => {
    it.each([
      [null, ''],
      [undefined, ''],
      ['60', ''],
      [NaN, ''],
    ])('должен возвращать для  %p результат  %p ', (minutes, expectedResult) => {
      const result = pipe.transform(minutes as number);

      expect(expectedResult).toBe(result);
    });
  });
});
