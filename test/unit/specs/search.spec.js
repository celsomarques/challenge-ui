import Vue from 'vue'
import Search from '@/components/flight/search'

describe('Search.vue', function() {

  it('should render correct contents', function()  {

    const Constructor = Vue.extend(Search)
    const vm = new Constructor().$mount()

    expect(vm.$el.querySelector('.v-select__selection').textContent).to.eq('All')
  })
})
