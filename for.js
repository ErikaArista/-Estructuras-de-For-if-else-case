const f= [0,1];
for(i=2; i<100; i++){
f[i]= f[i-1]+f[i-2];
}
console.log(f);