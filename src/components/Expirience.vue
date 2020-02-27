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
          <input type="text" class="input" v-model="dayStart" v-on:click="showDayStart = true">

          <v-date-picker
            v-if="showDayStart"
            v-model="dayStart"
            @click:month="showDayStart = false"
            type="month"
            width="290"
            class="form__picker-elem"
          />
        </div>
      </div>
      <div class="col-md-6">
        <div class="form__label">End date</div>
        <div class="form__picker" v-if="!isCurrentPosition">
          <input type="text" class="input" v-model="dayEnd" v-on:click="showDayEnd = true">
          <v-date-picker
            v-if="showDayEnd"
            v-model="dayEnd"
            type="month"
            width="290"
            class="form__picker-elem"
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
          <v-combobox
            v-model="model"
            :filter="filter"
            :hide-no-data="!search"
            :items="items"
            :search-input.sync="search"
            hide-selected
            label="Search for an option"
            multiple
            small-chips
            solo
          >
            <template v-slot:no-data>
              <v-list-item>
                <span class="subheading">Create</span>
                <v-chip
                  :color="`${colors[nonce - 1]} lighten-3`"
                  label
                  small
                >
                  {{ search }}
                </v-chip>
              </v-list-item>
            </template>
            <template v-slot:selection="{ attrs, item, parent, selected }">
              <v-chip
                v-if="item === Object(item)"
                v-bind="attrs"
                :color="`${item.color} lighten-3`"
                :input-value="selected"
                label
                small
              >
                <span class="pr-2">
                  {{ item.text }}
                </span>
                <unicon name="times-circle" fill="#1867c0" width="15px" @click="parent.selectItem(item)"/>
              </v-chip>
            </template>
            <template v-slot:item="{ index, item }">
              <v-text-field
                v-if="editing === item"
                v-model="editing.text"
                autofocus
                flat
                background-color="transparent"
                hide-details
                solo
                @keyup.enter="edit(index, item)"
              ></v-text-field>
              <v-chip
                v-else
                :color="`${item.color} lighten-3`"
                dark
                label
                small
              >
                {{ item.text }}
              </v-chip>
              <v-spacer></v-spacer>
              <v-list-item-action @click.stop>
                <v-btn
                  icon
                  @click.stop.prevent="edit(index, item)"
                >
                  <v-icon>{{ editing !== item ? 'mdi-pencil' : 'mdi-check' }}</v-icon>
                </v-btn>
              </v-list-item-action>
            </template>
          </v-combobox>
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
