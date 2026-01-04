export default function RootLayout({children}:{children:React.ReactNode}){
return(<html className="dark"><body>
<nav className="flex gap-6 p-4 border-b border-white/10">
<a href="/" className="font-bold text-accent">Zentrix</a>
<a href="/shop">Shop</a><a href="/tickets">Tickets</a><a href="/forum">Forum</a><a href="/admin">Admin</a>
</nav><main className="p-8">{children}</main></body></html>);}