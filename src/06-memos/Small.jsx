/*EN vite se debe importar React ya que no viene configurada de manera global
  en cambio con create-react-app si viene esta configuración por defecto
*/
import React from "react";

export const Small = React.memo(({value}) => {
	console.log("Me renderize :D hijo");
	return <small>{value} </small>;
});
