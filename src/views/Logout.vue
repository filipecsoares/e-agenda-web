<script lang="ts">
import { useRouter } from 'vue-router';
import { logout } from '../services/auth.service';

export default {
  setup() {
    const router = useRouter();
    logout();
    router.push({ name: 'Login' });

    return {};
  },
};
</script>
