<template>
    <div>
        <button @click="last">上一张</button>
        <button @click="next">下一张</button>
    </div>
    <ul class="baner-img">
        <li>
            <keep-alive>
                <transition name="tr">
                    <img src="src" alt="src" key="src">
                </transition>
            </keep-alive>
        </li>
    </ul>
    <ul class="dots">
        <li v-for='num in 7'
            :style="{color:num==n?'red':'green'}"
            @click='change(num)' class='li'
        >
            ●

        </li>
    </ul>
</template>
<script>
    export default{
        data(){
            return {
                n: 1,
                tr: 'tr1',
                timeout1: '',
                timeout2: '',
                timeout3: '',
                flag: true,
            }
        },
        methods: {
            next(){
                if (this.flag) {
                    this.flag = false;
                    this.clearT();
                    this.n = this.n + 1 == 8 ? 1 : this.n + 1;
                    console.log(this.n)
                    this.tr = 'tr1';
                    this.timeout()
                }
            },
            last(){
                if (this.flag) {
                    this.flag = false;
                    this.clearT();
                    this.n = this.n - 1 == 0 ? 7 : this.n - 1;
                    this.tr = 'tr2';
                    this.timeout()
                }
            },
            clearT(){
                clearTimeout(this.timeout1);
                clearTimeout(this.timeout2);
                clearTimeout(this.timeout3);
            },
            timeout(){
                this.timeout2 = setTimeout(() => {
                    this.flag = true
                }, 1050);
                this.timeout1 = setTimeout(() => {
                    this.next()
                }, 3000);
            },
            change(num){
                if (this.flag) {
                    this.flag = false;
                    this.clearT();
                    this.tr = num - this.n > 0 ? 'tr1' : 'tr2';
                    this.n = num;
                    console.log(this.n)
                    this.timeout()
                }
            },
        },
        computed: {
            src(){
                return './src/assets/' + this.n + '.jpg'
            },
        },
        mounted(){
            this.timeout3 = setTimeout(this.next, 3000);
        }
    }
</script>
