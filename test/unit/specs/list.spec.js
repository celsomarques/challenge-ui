import { get } from 'lodash/fp'
import Vue from 'vue'
import List from '@/components/flight/list'

describe('List.vue', function() {

  it('should have Search component', function() {
    const Search = get('components.Search', List)
    expect(Search).to.be.ok
  })

  it('should have flight getter', function() {
    const getter = get('computed.flights', List)
    expect(getter).to.be.a('function')
  })

  it('should have data defined', function()  {

    const expectedData = {
      headers: [
        { align: 'center', sortable: false, text: 'Departure Airport' },
        { align: 'center', sortable: false, text: 'Departure Time' },
        { align: 'center', sortable: false, text: 'Arrival Airport' },
        { align: 'center', sortable: false, text: 'Scheduled Time' }
      ]
    }

    expect(List.data()).to.be.deep.eq(expectedData)
  })
})
