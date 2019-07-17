<template>
  <el-row>
    <el-col :span="14" style="margin-top: 30px">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
        <el-form-item label="Name" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item> 
        <el-form-item label="Category" prop="region">
          <el-select v-model="ruleForm.region" placeholder="Mevalar">
            <el-option label="Mevalar" value="meva"></el-option>
            <el-option label="Sabzavotlar" value="sabzavot"></el-option>
            <el-option label="Shirinliklar" value="shirinlik"></el-option>
          </el-select>
        </el-form-item>        
        <el-form-item>         
            <el-checkbox label="The item is available for sale" name="type"></el-checkbox>
        </el-form-item>
        <el-form-item label="Sold by" prop="resource">
          <el-radio-group v-model="ruleForm.resource">
            <el-radio label="Each"></el-radio>
            <el-radio label="Weight"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="Price" prop="name">
          <el-input v-model="ruleForm.price"></el-input>
        </el-form-item>   
        <el-form-item label="Cost" prop="name">
          <el-input v-model="ruleForm.cost"></el-input>
        </el-form-item>
        <el-form-item label="SKU" prop="name">
          <el-input v-model="ruleForm.sku"></el-input>
        </el-form-item>   
        <el-form-item label="Barcode" prop="name">
          <el-input v-model="ruleForm.barcode"></el-input>
        </el-form-item> 

        <el-divider></el-divider>
        
        <div style="margin: 10px 0px; text-align: center; font-size: 25px">Inventory</div>
        <el-form-item label="Composite item" prop="delivery">
          <el-switch v-model="ruleForm.composite_item"></el-switch>
        </el-form-item>
        <el-form-item label="Track stock" prop="delivery">
          <el-switch v-model="ruleForm.track_stock"></el-switch>
        </el-form-item>

        <el-divider></el-divider>

        <div style="margin: 10px 0px; text-align: center; font-size: 25px">Variants</div>
        
        <el-form-item prop="delivery">
          <p>Use variants if an item has different sizes, colors or other options</p>
        <el-button @click="dialogFormVisible = true">+ ADD VARIANTS</el-button>

                <el-dialog title="Do to .." :visible.sync="dialogFormVisible">
                  <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">Cancel</el-button>
                    <el-button type="primary" @click="dialogFormVisible = false">Confirm</el-button>
                  </span>
                </el-dialog>
                
        </el-form-item>

        <el-divider></el-divider>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">SAVE</el-button>
          <el-button @click="resetForm('ruleForm')">CANCEL</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<style>
.el-col {
  border: 1px solid #DCDFE6;
  padding: 18px;
  text-align: left;
  border-radius: 10px;
}
</style>


<script>
  export default {
    data() {
      return {
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px',
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        rules: {
          name: [
            { required: true, message: 'Please input Activity name', trigger: 'blur' },
            { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' }
          ],
          region: [
            { required: true, message: 'Please select Activity zone', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: 'Please pick a date', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: 'Please pick a time', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: 'Please select at least one activity type', trigger: 'change' }
          ],
          resource: [
            { required: true, message: 'Please select activity resource', trigger: 'change' }
          ],
          desc: [
            { required: true, message: 'Please input activity form', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
