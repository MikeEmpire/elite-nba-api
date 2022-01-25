import "core-js/stable";
import "regenerator-runtime/runtime";

import app, { PORT } from ".";

app.listen(PORT, (): void => {
  console.log(`Listening on port ${PORT}`);
});
