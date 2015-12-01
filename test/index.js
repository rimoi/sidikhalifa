import assert from 'assert';
import sidikhalifa from '../lib';

describe('sidikhalifa', function () {
  it('should have a version number!', function () {
    assert(typeof sidikhalifa.VERSION !== 'undefined', 'The Project should have a VERSION, whatever the actual version.');
  });
});
