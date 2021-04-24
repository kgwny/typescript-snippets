// 配列
const permissions = ['read', 'write', 'execute'] as const;
console.log(permissions);

// 型として定義
type Permission = typeof permissions[number];
// 'read' | 'write' | 'execute'

// 反復処理
for (const permission of permissions) {
    console.log(permission);
}
