new Vue({
  el: "#app",
  data: {
    calculatorType: "",
    picked: 1,
    principal: null,
    rate: null,
    time: null,
    number: null,
    total: null,
    result: false,
    interest: null,
    totalpayback: null,
    amount: null,
    interest: null
  },
  computed: {
    selectCompound: function(picker) {
      picker = this.picked;
      if (picker == 1) {
        picker = 2;
      } else {
        picker = 1;
      }
    }
  },
  methods: {
    roundOff: function(value) {
      return value.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
    },
    calculate: function(myswitch) {
      myswitch = this.picked;
      let rate = this.rate / 100;
      if (myswitch == 1) {
        this.amount = this.principal * (1 + rate / this.number) ** (this.number * this.time);
        this.interest = this.amount - this.principal;
      } else {
        this.interest = this.principal * rate * this.time;
        this.amount = eval(parseFloat(this.principal) + parseFloat(this.interest));
      }

      this.amount = this.roundOff(this.amount);
      this.interest = this.roundOff(this.interest);

      this.totalpayback = `Total Balance: ${this.amount}`;
      this.interest = `Interest: ${this.interest}`;
      if (this.totalpayback !== null) {
        this.result = true;
      }
    },
    reset: function() {
      this.picked = 1;
      this.principal = null;
      this.rate = null;
      this.time = null;
      this.number = null;
      this.total = null;
      this.result = false;
      this.interest = null;
      this.totalpayback = null;
    }
  }
});
