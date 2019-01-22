DROP PROCEDURE IF EXISTS sp_usuarios_insert;

CREATE PROCEDURE sp_usuarios_insert (
  pdeslogin VARCHAR(64),
  pdessenha VARCHAR(256)
)
  INSERT INTO tb_usuarios (deslogin, dessenha) VALUES (pdeslogin, pdessenha);
  SELECT * FROM tb_usuarios WHERE idusuario = LAST_INSERT_ID();