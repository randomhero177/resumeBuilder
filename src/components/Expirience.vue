<template>
  <div class="expirience">
    <header class="heading">
      <h2 class="heading__title">Expirience</h2>
    </header>
    <div class="row">
      <div class="col-md-6">
        <div class="form__label">Company</div>
        <input type="text" class="input">
      </div>
      <div class="col-md-6">
        <div class="form__label">Position</div>
        <input type="text" class="input">
      </div>
      <div class="col-md-6">
        <div class="form__label">Start date</div>
        <div class="form__picker">
          <datepicker placeholder="Select Date"
            v-model="dayStart"
            :format="format"
            :minimumView="'month'"
            :maximumView="'year'"
            :initialView="'year'"
          />
        </div>
      </div>
      <div class="col-md-6">
        <div class="form__label">End date</div>
        <div class="form__picker" v-if="!isCurrentPosition">
          <datepicker placeholder="Select Date"
            v-model="dayEnd"
            :format="format"
            :minimumView="'month'"
            :maximumView="'year'"
            :initialView="'year'"
          />
        </div>
        <div>
          <input type="checkbox" v-model="isCurrentPosition">
          <label>Все еще работаю здесь</label>
        </div>
      </div>
      <div class="col-md-12">
        <div class="form__label">Key responsibilities and description:</div>
        <wysiwyg v-model="myHTML" />
      </div>
      <div class="col-md-12">
        <div class="form__label">Key skills for this position:</div>

      </div>
    </div>
    <div v-if="workList.length">
      Key skills: native JS, Jquery, TypeScript, Git, Gulp, Less, MVS, .NET (as a stack
      with backend)
    </div>
    <span v-on:click="addNewPosition" class="add-btn">Add new position</span>
  </div>
</template>

<script>
  export default {
    name: 'Expirience',

    data: () => ({
      myHTML: '',
      format: 'yyyy-MM',
      dayStart: new Date().toISOString().substr(0, 10),
      showDayStart: false,
      showDayEnd: false,
      dayEnd: new Date().toISOString().substr(0, 10),
      workList: [],
      colors: ['green', 'purple', 'indigo', 'cyan', 'teal', 'orange'],
      isCurrentPosition: false,
      editing: null,
      index: -1,
      items: [
        { header: 'Select an option or create one' },
        {
          text: 'Foo',
          color: 'blue',
        },
        {
          text: 'Bar',
          color: 'red',
        },
      ],
      nonce: 1,
      menu: true,
      model: [
        {
          text: 'Foo',
          color: 'blue',
        },
      ],
      x: 0,
      search: null,
      y: 0,
    }),
    methods: {
      addNewPosition() {
        const config = {
          myHTML: '',
          company: '',
          position: '',
          dayStart: new Date().toISOString().substr(0, 10),
          dayEnd: new Date().toISOString().substr(0, 10),
          isCurrentPosition: false,
          editing: null,
        };
        this.workList.push(config);
      },
      edit(index, item) {
        if (!this.editing) {
          this.editing = item
          this.index = index
        } else {
          this.editing = null
          this.index = -1
        }
      },
      filter(item, queryText, itemText) {
        if (item.header) return false

        const hasValue = val => val != null ? val : ''

        const text = hasValue(itemText)
        const query = hasValue(queryText)

        return text.toString()
          .toLowerCase()
          .indexOf(query.toString().toLowerCase()) > -1
      },
    },
    watch: {
      model (val, prev) {
        if (val.length === prev.length) return

        this.model = val.map(v => {
          if (typeof v === 'string') {
            v = {
              text: v,
              color: this.colors[this.nonce - 1],
            }

            this.items.push(v)

            this.nonce++
          }

          return v
        })
      },
    },
  }
</script>
