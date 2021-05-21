<template>
  <div class="listStudents">
       <div class="list_students">
        <h3>List students</h3>
        <table id="grid-students" width="1000" border="1" cellpadding="0">
          <tr>
              <td>N</td>
              <td>Fullname</td>
              <td>Email</td>
              <td>Phone</td>
              <td>Address</td>
              <td>Interests</td>
              <td>Gender</td>
              <td>Act</td>
          </tr>
           <tr v-for="(student,index) in students" :key="index">
              <td>{{index}}</td>
              <td>{{student.fullname}}</td>
              <td>{{student.email}}</td>
              <td>{{student.phone}}</td>
              <td>{{student.address}}</td>
              <td>{{student.interests}}</td>
              <td>{{student.gender}}</td>
              <td @click="deletestudent(index)"><span class="delete">Delete</span></td>
          </tr>
        </table>
    </div>
  </div>
</template>

<script>
export default {
    name: 'listStudents',
methods:{
    deletestudent(index){
        this.students.splice(index,1)
    }
},
props:['students',]
}
</script>

<style scoped>
.delete{
    cursor: pointer;
    color: rgb(221, 21, 21);
}

.list_students{
    width: 1000px;
    border: 1px solid;
    text-align: center;
    background: hsl(0, 98%, 49%,0.2);
    float: left;
    margin: 20px;
}
</style>