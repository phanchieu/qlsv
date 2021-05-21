<template>
  <div id="form_add">
    <div class="form">
      <h3>Add student</h3>
      <div class="box_error">
        <span class="error" v-if="error != null">{{error}}</span>
      </div>
      <div class="p"><label  for="fullname">Fullname:</label></div>
      <input type="fullname"
       placeholder="Enter fullname" 
       id="fullname" 
       v-model="fullname">
      <br>
      <div class="p"><label for="email">Email:</label></div>
      <input type="email" 
      placeholder="Enter email @gmail.com" 
      id="email" 
      v-model="email">
      <br>
      <div class="p"><label for="phone">Phone:</label></div>
      <input type="phone" 
      placeholder="Enter phone number"
       id="phone" 
       v-model="phone">
      <br>
      <div class="p"> <label for="address">Address:</label></div>
      <input type="address"
       placeholder="Enter address" 
       id="address" 
       v-model="address">
      <br>
      <div class="p"> <label for="interests">Interests:</label></div>
      <input type="text"
       placeholder="Enter interests" 
       id="interests" 
       v-model="interests">
      <br>
      <!-- gender -->
      <div class="p"><label for="#">Gender:</label></div>
      <input type="radio" 
      id="male" 
      name="gender" 
      value="Male" checked 
      v-model="gender">
      <label for="male">Male</label>

       <input type="radio" 
       id="female" 
       name="gender" 
       value="Female" 
       v-model="gender">
      <label for="female">Female</label>
      <!-- done gender -->
      <br>
      <!-- <span class="p">&nbsp;</span> -->
      <button @click="save()">SAVE</button>
    </div>
    <listStudents :students="students"/>
  </div>
</template>

<script>
import ListStudents from './listStudents.vue';
export default {
  name:'addStudent',
  components:{
    ListStudents,
  },
data(){
  return{
    students:[],
      fullname:'',
      email:'',
      phone:'',
      address:'',
      gender:'',
      interests:'',
    error: null,
  }
},

methods:{
  save(){
    var fullname = this.fullname;
    var email = this.email;
    var phone = this.phone;
    var address = this.address;
    var gender = this.gender;
    var interests = this.interests;

  if(fullname.trim() =='' ||
  email.trim() =='' ||
  phone.trim() =='' ||
  address.trim() ==''||
  interests.trim()=='' ){
    this.error = 'Please enter complete information'
  }
  else if(fullname.trim().length <= 3){
    this.error='Name should not be less than 3 characters'
  
  }
  else if(email.includes('@gmail.com') == false){
    this.error = 'Please enter the correct email'
  }
  else if(phone.trim().length < 10){
    this.error = 'Please enter the correct phone number'
  }
  else if(address.length < 6){
    this.error = 'address should not be less than 6 characters'
  }
  else if(gender==''){
    this.error ='Please select your gender'
  }
  else if(interests.trim().length<3){
    this.error ='Please enter the correct preferences'
  }
  else{
    this.error='';
    this.students.push({
      fullname:fullname,
      email:email,
      phone:phone,
      address:address,
      gender:gender,
      interests:interests
    })
    console.log(this.students)
  }
  }
}
 
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.box_error{
  text-align: center;
  height: 30px;
}
.error{
  color: red;
}
.form{
  width: 500px;
  border: 1px solid;
  margin: 20px;
  padding: 20px;
  background: hsl(0, 98%, 49%,0.2);
  float: left;
}
.form h3{
  padding-top:10px ;
  text-align: center;
}
.form .p {
  width: 80px;
  float: left;
}
input {
  width: 300px;
  height: 35px;
  margin-bottom: 15px;
  padding: 5px;
  font-size: 17px;
}
#male,#female{
  width: 20px;
  height: 13px;
  cursor: pointer;
}
.form button{
  width: 300px;
  height: 35px;
  margin-left: 80px;
  cursor: pointer;
  background: hsl(0, 98%, 49%,0.2);
}
</style>