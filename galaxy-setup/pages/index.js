import { useRouter } from 'next/router';

export default function Setup() {

    const router = useRouter();
    if (typeof window !== 'undefined') {
        router.push('/setup');
    }

    return <></>;
}
