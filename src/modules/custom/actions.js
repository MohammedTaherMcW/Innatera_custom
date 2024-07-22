import { createAction } from '../../store/actions';

export const SEND_TARGETS = 'SEND_TARGETS';

export const sendtargets = (targets) => createAction(SEND_TARGETS, { targets });

