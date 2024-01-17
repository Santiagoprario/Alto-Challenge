const useAuth = (): boolean => {
    const user = localStorage.getItem('userProfile');
    if (user) {
      return true;
    }
    return false;
};

export default useAuth;
