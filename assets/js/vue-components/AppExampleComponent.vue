<template>
    <div class="alert alert-success" role="alert">
        <strong>Success!</strong> {{ msg }}
    </div>
</template>
 
<script>
    export default {
        data() {
            return {
                msg: 'Here is the example vue component.'
            }
        }
    }
</script>