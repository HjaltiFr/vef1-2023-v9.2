import { getLaunch,  } from './api.js';
import { el } from './elements.js';
// eslint-disable-next-line import/no-unresolved
import { setLoading, setNotLoading } from './lib/ui.js';


export async function renderDetails(parentElement, id) {
    const container = el('main', {});
    
  
    parentElement.appendChild(container);
    setLoading(container);
  
    try {
      const result = await getLaunch(id);
  
      if (!result) {
        return;
      }
  
      const launchTitle = el('h2', {}, result.name);
      const launchDescription = el('p', {}, result.description);
      const launchDate = el('p', {}, `Launch Date: ${result.date}`);
  
      container.appendChild(launchTitle);
      container.appendChild(launchDescription);
      container.appendChild(launchDate);
    } catch (error) {
      console.error('Villa við að sækja geimskot', error);
    } finally {
      setNotLoading(container);
    }
  }